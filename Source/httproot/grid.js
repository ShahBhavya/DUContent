function getService()
{
	var e = event.srcElement;
	while (e) {
		if (e.tagName == "TR")
			break;
		e = e.parentElement;
	}
	return e;
}

function clk()
{
	var serviceid = getService().id;
	if (serviceid)
		trash.location='cmd?type=grid.tune&channel=' + serviceid;
}

function over()
{
	getService().style.backgroundColor = "#E0E0FF";
}

function out()
{
	getService().style.backgroundColor = "#C0C0E0";
}