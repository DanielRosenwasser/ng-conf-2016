interface Todo {
	title: string;
	completed: boolean;
}
interface TodoCtrl {
	todos: Todo[];
	ESCAPE_KEY: number;
	editedTodo: {};
	newTodo: Todo;
	originalTodo: Todo;
	location: any;
	statusFilter: { completed: boolean };
	remainingCount: number;
	allChecked: boolean;
	
	addTodo: () => void;
	editTodo: (todo: Todo) => void;
	doneEditing: (todo: Todo, index: number) => void;
	removeTodo: (index: number) => void;
	revertEditing: (index: number) => void;
	clearCompletedTodos: () => void;
	markAll: (completed: boolean) => void;
}