
document.getElementById('btn-theme').addEventListener('click', function(event){

    // event.preventDefault();
    
    const colorArray = ['yellow', 'indianred', 'purple', 'blue', 'yellowgreen',
        'AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood', 'CadetBlue',	'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen'
    ];
    
    // DarkKhaki	DarkMagenta	DarkOliveGreen	Darkorange	DarkOrchid	DarkRed	DarkSalmon	DarkSeaGreen	DarkSlateBlue	DarkSlateGray	DarkSlateGrey	DarkTurquoise	DeepPink	DeepSkyBlue	DimGray	DimGrey	DodgerBlue	FireBrick	FloralWhite	ForestGreen	Fuchsia	Gainsboro	GhostWhite	Gold	GoldenRod	Gray	Grey	Green	GreenYellow	HoneyDew	HotPink	IndianRed	Indigo	Ivory	Khaki	Lavender	LavenderBlush	LawnGreen	LemonChiffon	LightBlue	LightCoral	LightCyan	LightGoldenRodYellow	LightGray	LightGrey	LightGreen	LightPink	LightSalmon	LightSeaGreen	LightSkyBlue	LightSlateGray	LightSlateGrey	LightSteelBlue	LightYellow	Lime	LimeGreen	Linen	Magenta	Maroon	MediumAquaMarine	MediumBlue	MediumOrchid	MediumPurple	MediumSeaGreen	MediumSlateBlue	MediumSpringGreen	MediumTurquoise	MediumVioletRed	MidnightBlue	MintCream	MistyRose	Moccasin	NavajoWhite	Navy	OldLace	Olive	OliveDrab	Orange	OrangeRed	Orchid	PaleGoldenRod	PaleGreen	PaleTurquoise	PaleVioletRed	PapayaWhip	PeachPuff	Peru	Pink	Plum	PowderBlue	Purple	Red	RosyBrown	RoyalBlue	SaddleBrown	Salmon	SandyBrown	SeaGreen	SeaShell	Sienna	Silver	SkyBlue	SlateBlue	SlateGray	SlateGrey	Snow	SpringGreen	SteelBlue	Tan	Teal	Thistle	Tomato	Turquoise	Violet	Wheat	White	WhiteSmoke	Yellow	YellowGreen
    
    const randomNumber = Math.floor(Math.random() * colorArray.length);
    console.log(randomNumber);

    // for (const color of colorArray){

    // }

    // document.getElementById('body').style.backgroundColor = "purple";
    document.getElementById('body').style.backgroundColor = colorArray[randomNumber];
})