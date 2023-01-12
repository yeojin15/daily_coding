import re
def solution(my_string):
    answer = re.findall(r"[0-9]+",my_string)
    result = 0
    print(answer)
    for i in answer:
        result+=int(i)
    return result