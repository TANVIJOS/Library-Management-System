exports.getOverdueBooks = async (req, res) => {
    // Implement logic to get overdue books, for example:
    const overdueBooks = await Book.find({ dueDate: { $lt: Date.now() } });
    res.json(overdueBooks);
  };
  