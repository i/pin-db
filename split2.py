import os, sys

lines = open(sys.argv[1]).readline()
open(sys.argv[1],'wb').writelines(lines[14:-1])
