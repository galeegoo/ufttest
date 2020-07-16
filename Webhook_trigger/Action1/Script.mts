'This is a webhookscript to call Concourse pipeline
'Gpurvi001
'7-16-2020

set wshshell = createobject("wscript.shell")
wshShell.Run("ubuntu")
wait 2
wshshell.SendKeys "bash webhook-trigger.sh", wait(5) 
wait 2
wshShell.SendKeys "{ENTER}"
wait 10
wshShell.SendKeys "exit"
wait 2
wshShell.SendKeys "{ENTER}"
wait 2
set wshShell = Nothing

