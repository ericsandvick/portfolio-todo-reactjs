function ToDo(id, title, dueDate, isComplete) {
    this.dueDate = dueDate;
    this.id = id;
    this.isComplete = isComplete;
    this.isDeleted = false;
    this.isVisible = true;
    this.title = title;
}

export default ToDo;