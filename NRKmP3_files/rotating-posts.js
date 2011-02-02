 /*
 * Version 1.0
 */

var $rp_timer = 0;

function rp_timer_click()
{
	rp_change_text(window.rp_current_post + 1);
	rp_start_timer();
}

function rp_start_timer()
{
	$rp_timer = setTimeout("rp_timer_click()", window.rp_timer_sec * 1000);
	document.getElementById("rp_nav_pause").onclick = rp_stop_timer;
	document.getElementById("rp_nav_pause_normal").style.display = "inline";
	document.getElementById("rp_nav_pause_pressed").style.display = "none";
}

function rp_stop_timer()
{
	clearTimeout($rp_timer);
	document.getElementById("rp_nav_pause").onclick = rp_restart_timer;
	document.getElementById("rp_nav_pause_normal").style.display = "none";
	document.getElementById("rp_nav_pause_pressed").style.display = "inline";
}

function rp_restart_timer()
{
	rp_timer_click();
}

function rp_change_text($rp_current)
{
	rp_stop_timer();

	if ($rp_current < 0)
	{
		$rp_current = window.rp_number_posts - 1;
	}
	$rp_current = $rp_current % window.rp_number_posts;

	window.rp_current_post = $rp_current;

	for (i = 0; i < window.rp_number_posts; i++)
	{
		if (i == $rp_current)
		{
			document.getElementById('rp_post' + i).style.display = "block";
			document.getElementById('rp_nav_thumbnail' + i).className = "rp_nav_thumbnail_on";
		}
		else
		{
			document.getElementById('rp_post' + i).style.display = "none";
			document.getElementById('rp_nav_thumbnail' + i).className = "rp_nav_thumbnail_off";
		}
	}
}
