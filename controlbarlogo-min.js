jwplayer().registerPlugin("controlbarlogo","6.0",function(e,t,n){function r(){if(e.getState()=="PLAYING"||e.getState()=="PAUSED"){n.innerHTML='<a id="controlbarlogo1" onclick="this.blur();"><div id="controlbarlogo2" onmouseover="return false;"></div></a>';if(t.link==null){document.getElementById("controlbarlogo1").href="http://www.jwplayer.com/"}else{document.getElementById("controlbarlogo1").href=t.link}if(t.target==null){document.getElementById("controlbarlogo1").target="_top"}else{document.getElementById("controlbarlogo1").target=t.target}if(t.width==null){document.getElementById("controlbarlogo2").style.width="50px"}else{document.getElementById("controlbarlogo2").style.width=t.width}if(t.height==null){document.getElementById("controlbarlogo2").style.height="20px"}else{document.getElementById("controlbarlogo2").style.height=t.height}if(t.border==null){}else{document.getElementById("controlbarlogo2").style.border=t.border}n.style.position="absolute";n.style.zIndex="100";n.style.cursor="pointer";if(t.left==null){n.style.left="15px"}else{n.style.left=t.left}if(t.top==null){n.style.top=e.getHeight()-35+"px"}else{n.style.top=t.top}if(e.getRenderingMode()=="flash"){var r=document.getElementById(e.id+"_wrapper");var i=r.style.width;i=i.substr(0,i.length-2);if(t.left==null){n.style.left=i+"px"}else{n.style.left=t.left}}else{var r=document.getElementById(e.id);var i=r.style.width;i=i.substr(0,i.length-2);i=i-60;if(t.left==null){n.style.left=i+"px"}else{n.style.left=t.left}}}}this.resize=function(t,r){if(e.getFullscreen()==true){n.style.display="none"}else{n.style.display="inline"}};e.onReady(r);e.onPlay(r);e.onPause(r)})
