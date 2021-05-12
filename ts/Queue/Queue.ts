export default class Queue<Block> {
	elements: Array<Block>;
	maxLength: number | undefined;

	constructor(maxLength?: number) {
		this.elements = [];
		maxLength && maxLength > 0
			? (this.maxLength = maxLength)
			: (this.maxLength = undefined);
	}

	enqueue(item: Block) {
		this.elements.push(item);
	}

	dequeue() {
		// Get oldest element WITHOUT preserving it
		return this.elements.shift();
	}

	bounce(item: Block) {
		// New element in, oldest element out
		// Also returns removed item
		this.enqueue(item);
		if (this.maxLength && this.maxLength < this.length())
			return this.dequeue();
	}

	isEmpty() {
		return this.elements.length === 0;
	}

	peek() {
		// Get oldest element WHILE preserving it
		return !this.isEmpty() ? this.elements[0] : undefined;
	}

	length() {
		return this.elements.length;
	}

	get() {
		return this.elements;
	}
}
