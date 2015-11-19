function Point(x, y, type)
{
	this._x = 0;
	this._y = 0;
	this._type = Point.NORMAL;

	this.x(x);
	this.y(y);
	this.type(type);

	this._restX = this.x();
	this._restY = this.y();
}

Point.NORMAL  = Point[1] = 1;
Point.CONTROL = Point[2] = 2;

var fn = Point.prototype;

fn.x = function(x)
{
	if(typeof x === 'number')
	{
		this._x = x;
		this[0] = x;
	}

	return this._x;
};

fn.y = function(y)
{
	if(typeof y === 'number')
	{
		this._y = y;
		this[1] = y;
	}

	return this._y;
};

fn.restX = function(x)
{
	if(typeof x === 'number')
	{
		this._restX = x;
	}

	return this._restX;
};

fn.restY = function(y)
{
	if(typeof y === 'number')
	{
		this._restY = y;
	}

	return this._restY;
};

fn.type = function(type)
{
	if(Point[type])
	{
		this._type = type;
	}

	return this._type;
};
