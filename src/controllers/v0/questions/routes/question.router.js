const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send({'message': 'hello'});
});

// router.get('/:id', async (req: Request, res: Response) => {
//     let { id } = req.params;
//     const item = await User.findByPk(id);
//     res.send(item);
// });

module.exports = router;