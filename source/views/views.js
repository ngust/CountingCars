/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/
var type;
var color;
var count = 0;

var countCar = 0;
var countPickup = 0;
var countDTruck = 0;
var countRV = 0;

var countBK = 0;
var countWT = 0;
var countSL = 0;
var countBL = 0;

enyo.kind({
	name: "myapp.MainView",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", content: "Lets count cars!"},
			{kind: "onyx.Toolbar", components: [
			{ kind: "onyx.PickerDecorator", components: [
			            {style: "min-width: 150px;"},
			            { name: "TypeCar", kind: "onyx.Picker", components: [
			                { content: "car" },
			                { content: "pickup", active: true },
			                { content: "delivery truck" },
			                { content: "RV" }
			            ]}
			        ]},
			{ kind: "onyx.PickerDecorator", components: [
			            {style: "min-width: 150px;"},
			            { name: "ColorCar", kind: "onyx.Picker", components: [
			                { content: "black" },
			                { content: "white", active: true },
			                { content: "silver" },
			                { content: "blue" }
			            ]}
			        ]},
			{kind: "onyx.Button", content: "Tap me", ontap: "helloWorldTap"}
		]},
		{kind: "current"},
		{kind: "viewTotals"},
		{kind: "enyo.Scroller", fit: true, components: [
			{name: "main", classes: "nice-padding", allowHtml: true}
		]},
	
	],
	create: enyo.inherit(function (sup) {
        return function () {
            sup.apply(this, arguments);
            this.$.viewTotals.set("totModel", carTotals);
        	};
       }),
	helloWorldTap: function(inSender, inEvent) {
		this.$.main.setContent("");
		this.$.main.addContent("<br/>The button was tapped.<br/>");
		type = this.$.TypeCar.getSelected().getContent();

		switch (type)
			{
		    case "car":
		   			countCar += 1;
		   			carTotals.set("Car", countCar);
		   			break;
		   	case "pickup":
		   			countPickup += 1;
		   			carTotals.set("Pickup", countPickup);
		   			break;
		   	case "delivery truck":
		   			countDTruck += 1;
		   			carTotals.set("DTruck", countDTruck);
		   			break;
		   	case "RV":
		   			countRV += 1;
		   			carTotals.set("RV", countRV);
		   			break;
		    default: 
		        alert('No Type Selected');
			}
		count += 1;
		carTotals.set("Total", count);
		// this.$.results.set('count', count);
		this.$.current.set('type', type);

		// this.$.total.setContent('Total vehicles = ' + count);
		// this.$.totCars.setContent('Total cars = ' + countCar);
		// this.$.totPickups.setContent('Total pickups = ' + countPickup);
		// this.$.totDT.setContent('Total delivery trucks = ' + countDTruck);
		// this.$.totRV.setContent('Total RVs = ' + countRV);


		color = this.$.ColorCar.getSelected().getContent();
		switch (color)
			{
		    case "black":
		   			countBK += 1;
		   			carTotals.set("Black", countBK);
		   			break;
		   	case "white":
		   			countWT += 1;
		   			carTotals.set("White", countWT);
		   			break;
		   	case "silver":
		   			countSL += 1;
		   			carTotals.set("Silver", countSL);
		   			break;
		   	case "blue":
		   			countBL += 1;
		   			carTotals.set("Blue", countBL);
		   			break;
		    default: 
		        alert('No Type Selected');
			}
			this.$.current.set('color', color);

			// logging stuff
		this.$.main.addContent(color + "<br/>");
		this.$.main.addContent(type + "<br/>");
		console.log(count);
		console.log("current colour kind is " + this.$.current.color);
		console.log("model total = " + carTotals.get("Total"));
		console.log("model pickup = " + carTotals.get("Pickup"));
	}
});

enyo.kind({
		 	name: "current",
      color: 'none',
      type: 'none',
      components: [
          {kind: "enyo.Control", name: "forecastLabel", content: "Hats"},
	      ],
      bindings: [
          {from: 'forecast', to: '$.forecastLabel.content'}
      ],
      computed: [
          { method: 'forecast', path: ['color', 'type'] }    // 'forecast' method depends on properties in list
      ],
      forecast: function () {
          return 'You picked a ' + this.get('type') + ' that is ' + this.get('color') + " in color!"
      }
    });

enyo.kind({
    name: "viewTotals",
    totModel: null,
    components: [
	        {tag: "h5", content: "Total Vehicles"},{kind: "enyo.Control", name: "Total", content: "Nothing Yet"},
					{tag: "h5", content: "Total Cars"},{kind: "enyo.Control", name: "Car", content: "Nothing Yet"},
					{tag: "h5", content: "Total Pickups"},{kind: "enyo.Control", name: "Pickup", content: "Nothing Yet"},
					{tag: "h5", content: "Total Delivery Trucks"},{kind: "enyo.Control", name: "DTruck", content: "Nothing Yet"},
					{tag: "h5", content: "Total RVs"},{kind: "enyo.Control", name: "RV", content: "Nothing Yet"},
					{tag: "h5", content: "Total Black"},{kind: "enyo.Control", name: "Black", content: "Nothing Yet"},
					{tag: "h5", content: "Total Silver"},{kind: "enyo.Control", name: "Silver", content: "Nothing Yet"},
					{tag: "h5", content: "Total White"},{kind: "enyo.Control", name: "White", content: "Nothing Yet"},
					{tag: "h5", content: "Total Blue"},{kind: "enyo.Control", name: "Blue", content: "Nothing Yet"}
    ],
    bindings: [
        {from: "totModel.Total", to: "$.Total.content"},
        {from: "totModel.Car", to: "$.Car.content"},
        {from: "totModel.Pickup", to: "$.Pickup.content"},
        {from: "totModel.DTruck", to: "$.DTruck.content"},
        {from: "totModel.RV", to: "$.RV.content"},
        {from: "totModel.Black", to: "$.Black.content"},
        {from: "totModel.Silver", to: "$.Silver.content"},
        {from: "totModel.White", to: "$.White.content"},
        {from: "totModel.Blue", to: "$.Blue.content"}
    ]
});

