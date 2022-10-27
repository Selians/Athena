/**

* @file Runs for new players only (SP & MP)

*/

/**

PlayerEvents.loggedIn(event => {
  if (!event.player.stages.has('first_start')) 
  {
    event.player.stages.add('first_start');
  }
})
 */