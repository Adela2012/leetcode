# Read from the file file.txt and output all valid phone numbers to stdout.
grep -P '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt
# sed -n -r '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt
# awk '^(\d{3}-|\(\d{3}\) )\d{3}-\d{4}$' file.txt