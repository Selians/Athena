// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {

	/* REMOVE BY RECIPE ID */
	event.remove({id:'projectvibrantjourneys:groundcover_cobblestone'});

	/* REMOVE BY MODID */
	event.remove({mod:'arclight'});
	
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})


LootJS.modifiers((event) => {
	event
		.addEntityLootModifier("ob_aquamirae:captain_cornelia")
		.addLoot("endrem:coldeye");

	event
		.addEntityLootModifier("cataclysm:netherite_monstrosity")
		.addLoot("endrem:nether_eye");
})