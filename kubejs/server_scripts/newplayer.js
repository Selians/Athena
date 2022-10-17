/**

 * @file Runs for new players only (SP & MP).

 * 

 * This includes things like introductory chat messages + links, starting items, and anything else that needs 

 * to be set just once the first time a player connects.

 * 

 */



/**

 * Player Login Event Handler

 */

 onEvent('player.logged_in', function (event) {

    if (!event.player.stages.has('first_start')) {
  
      event.player.stages.add('first_start');
  
      //* event.player.tell(Text.translate('valhelsia.first_start_message'));
  
    }
  
  })