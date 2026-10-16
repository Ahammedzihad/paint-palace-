import os
import re

with open(r"c:\Anti Gravity\PAINT PALACE\index.html", "r", encoding="utf-8") as f:
    html = f.read()

srcs = re.findall(r'src=["\']([^"\']+)["\']', html)
urls = re.findall(r'url\(["\']?([^"\'\)]+)["\']?\)', html)

all_paths = set(srcs + urls)

with open(r"c:\Anti Gravity\PAINT PALACE\styles.css", "r", encoding="utf-8") as f:
    css = f.read()

css_urls = re.findall(r'url\([\'"]?([^\'")]+)[\'"]?\)', css)
for u in css_urls:
    if not u.startswith("http") and not u.startswith("data:"):
        all_paths.add(u)

print("Total referenced assets in HTML and CSS:", len(all_paths))

missing = []
for p in all_paths:
    if p.startswith("http") or p.startswith("data:"):
        continue
    norm_p = p.replace("/", os.sep)
    local_p = os.path.join(r"c:\Anti Gravity\PAINT PALACE", norm_p)
    if not os.path.exists(local_p):
        missing.append((p, local_p))

if missing:
    print("MISSING ASSETS:")
    for m in missing:
        print(" -", m[0])
else:
    print("SUCCESS: ALL HTML & CSS ASSETS EXIST AND ARE 100% READY!")

