'This is a webhookscript to call Concourse pipeline
'Gpurvi001
'7-20-2020

set wshshell = createobject("wscript.shell")
wshShell.Run("ubuntu")
wait 5
wshshell.SendKeys "bash webhook-trigger.sh", wait(5) 
wait 5
wshShell.SendKeys "{ENTER}"
wait 5
wshShell.SendKeys "exit"
wait 5
wshShell.SendKeys "{ENTER}"
wait 5
set wshShell = Nothing

