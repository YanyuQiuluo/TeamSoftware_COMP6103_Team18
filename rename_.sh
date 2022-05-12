#!/bin/sh
#更改提交中所有邮箱为OLD_EMAIL或用户名为OLD_NAME的为新的用户名和新的邮箱，注释部分的可以变更邮箱

# CORRECT_EMAIL="your-correct-email@example.com"
# OLD_EMAIL="yo.com"
# export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
# export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
git filter-branch --env-filter '
OLD_EMAIL="604271396@qq.com"
CORRECT_EMAIL="ywang597@sheffield.ac.uk"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' -f --tag-name-filter cat -- --branches --tags    #-f为强行覆盖
#取消下面的#注释，将自动强行推送所有修改到主分支
#git push origin master --force