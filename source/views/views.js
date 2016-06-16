/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/
var test;

enyo.kind({
	name: "myapp.MainView",
	kind: "FittableRows",
	fit: true,
	components:[
		{kind: "onyx.Toolbar", content: "Hello World"},
		{kind: "enyo.Scroller", fit: true, components: [
			{name: "main", classes: "nice-padding", allowHtml: true}
		]},
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
			{kind: "onyx.Button", content: "Tap me", ontap: "helloWorldTap"}
		]}
	],
	helloWorldTap: function(inSender, inEvent) {
		this.$.main.addContent("The button was tapped.<br/>");
		test = this.$.TypeCar.getSelected().getContent();
		this.$.main.addContent(test);
	}
});

// enyo.kind({
//     name: "TypeCar",
//     kind: "enyo.Control",
//     classes: "onyx",
// 			components:[
// 			        { kind: "onyx.PickerDecorator", components: [
// 			            {style: "min-width: 150px;"},
// 			            { kind: "onyx.Picker", components: [
// 			                { content: "car" },
// 			                { content: "pickup", active: true },
// 			                { content: "delivery truck" },
// 			                { content: "RV" }
// 			            ]}
// 			        ]}
// 			    ]
// 		});

// enyo.kind({
//     name: "ColorCar",
//     kind: "enyo.Control",
//     classes: "onyx",
// 			components:[
// 			        { kind: "onyx.PickerDecorator", components: [
// 			            {style: "min-width: 150px;"},
// 			            { kind: "onyx.Picker", components: [
// 			                { content: "blackk" },
// 			                { content: "white", active: true },
// 			                { content: "silver" },
// 			                { content: "blue" }
// 			            ]}
// 			        ]}
// 			    ]
// 		});
