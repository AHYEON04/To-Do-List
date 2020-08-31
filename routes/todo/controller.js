const{ Todo } = require("../../models");

const write = async (req, res) => {
    const userId = req.decoded.id;
    const content = req.body.content;
    console.log(userId, content);
    try{
       await Todo.create({
           content,
           userId,
        });
        res.status(200).json({
            message: "투두 작성 성공",
        });
    }catch (e) {
        res.status(500).json({
            message: "투두 작성 실패",
        });
    }
};


const showTodo = async(req, res) => {
    const userId = req.decoded.id;
    try {
      const todo = await Todo.findAll({
         attributes: ["id","content"],
         where: {
            userId,
         },
         
      });
      res.status(200).json({
          message: "성공",
          todo,
      });
    } catch (e) {
        res.status(500).json({
        message: "실패",
      });
    }
}; 

const deleteOne = async(req, res) => {
    const todoId = req.params.id;
    const userId = req.decoded.id;
    try {
        const todo = await Todo.findOne({ 
            where: {
                id: todoId,
            },
        });
        console.log(todo);
        if (todo.userId !== userId) {
            res.status(403).json({
                message: "본인의 투두가 아님",
            });
        }
        await todo.destroy();
        res.status(200).json({ 
            message: "성공", 
        });
    } catch(e){
        res.status(404).json({
            message: "실패",
        });
    }
};

module.exports = {
    write, 
    showTodo,
    deleteOne,
};
