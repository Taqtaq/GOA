import os
import re

PAD_LENGTH = 3
base_dir = os.getcwd()

pattern = re.compile(r"^level(?:[\s\-_]*)?(\d+)$", re.IGNORECASE)

for name in os.listdir(base_dir):
    path = os.path.join(base_dir, name)
    if not os.path.isdir(path):
        continue

    m = pattern.match(name)
    if not m:
        continue

    number = m.group(1)
    new_name = f"level-{number.zfill(PAD_LENGTH)}"
    new_path = os.path.join(base_dir, new_name)

    if name == new_name:
        continue

    print(f"{name} -> {new_name}")
    os.rename(path, new_path)

print("✅ Done")