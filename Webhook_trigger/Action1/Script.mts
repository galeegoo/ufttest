'This is a webhookscript to call Concourse pipeline
'Gpurvi001
'7-20-2020

set wshshell = createobject("wscript.shell")
wshShell.Run("ubuntu")
wait 10
wshshell.SendKeys "bash webhook-trigger.sh", wait(5) 
wait 10
wshShell.SendKeys "{ENTER}"
wait 10
wshShell.SendKeys "exit"
wait 10
wshShell.SendKeys "{ENTER}"
wait 10
set wshShell = Nothing

