
import { endAdventure, haveAdventures } from '..';
import { askQuestion, clear, print } from '../console';

const decisions = ['Buy', 'Bargain', 'Leave'] as const;
type Decision = typeof decisions[number];

const items = ['Potion bottle', 'Talking flower', 'Timestopper'];

export function goShopping(): void {
	clear(true);
	print('Scotty has beamed you to the Mad Hatters Emporium');

	print('------------------------');
	print('You can see a number of bizarre and wonderful items: ');
	items.forEach((h, i) => print(`   ${i} - ${h}`));
	askQuestion('Which do you want to buy', buyItem);
}

export function buyItem(item: string): void {
	clear(true);

	//  it might seem like we know this is a number, but of course the user can enter any nonsense to the prompt!
	const choice = parseInt(item);

	if (isNaN(choice)) {
		print(`😮`);
		print(`That's not a number 😭`);
		return endAdventure();
	}

	if (choice < 0 || choice > items.length - 1) {
		print(`😮`);
		print(`${choice} is an invalid number 😭`);
		return endAdventure();
	}

	print(`The shopkeeper says "Here you go dear. Enjoy your" ${items[choice]}`);
	return askQuestion(
		'Want to go back to wonder land',
		haveAdventures
	);
	
}

