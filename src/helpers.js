function choice(items) {
	let pos = Math.floor(Math.random() * items.length);
	return items[pos];
}

function remove(items, item) {
	let pos = items.indexOf(item);
	if (pos !== -1) {
		return items.splice(pos, 1);
	}
	return undefined;
}

export { choice, remove };
