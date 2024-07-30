const db = require("../database/models");
const List = db.List;

const store = async (req, res) => {
  try {
    const save = await List.create(req.body)
    res.json(save).status(201);
  } catch (error) {
    res.json(error).status(422);
  }
}

const index = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || "";
    const offset = limit * page;
    const totalRows = await List.count(); 
    const totalPage = Math.ceil(totalRows / limit);
    const result = await List.findAll({
      offset: offset,
      limit: limit,
      order:[
        ['id', 'ASC']
      ]
    });
    // const result = await List.findAndCountAll();
    // res.status(200).json({
    //   data: result,
    //   count: result.count
    // });
    res.status(200).json({
      result: result,
      page: page,
      limit: limit,
      totalRows: totalRows,
      totalPage: totalPage
  });
  } catch (error) {
    res.json(error).status(422);
  }
}

const show = async (req, res) => {
  try {
    const id = req.params.id
    const data = await List.findByPk(id)
    const result = data ? data : `${id} not found in db`
    res.json(result).status(200)
  } catch (error) {
    res.json(error).status(422)
  }
}

const update = (req, res) => {
  List.findByPk(req.params.id).then((emp) => {
    if(emp){
        emp.update(req.body)
        msg = emp
    }else{
        msg = `${req.params.id} not found in db`
    }
    res.json({ message: msg })
  }).catch((err) => {
    res.json({ msg: err.message });
  });
}

const destroy = (req, res) => {
  let msg
  List.findByPk(req.params.id).then((row) => {
    if(row){
        row.destroy()
        msg = "success deleted"
    }else{
        msg = `${req.params.id} not found in db`
    }
    res.json({ message: msg })
  }).catch((err) => {
    res.json({ message: err.message })
  })
}

module.exports = {
  index, show, store,
  update, destroy
}