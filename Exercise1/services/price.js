const Prices = require("../models/prices");

const findAll = async () => {
  try {
    const prices = await Prices.find()
    return {
      success: true,
      data: prices
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const findById = async (id) => {
  try {
    const price = await Prices.findById(id)
    return {
      success: true,
      data: price
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const create = async (newPrice) => {
  try {
    const price = await Prices.create(newPrice)
    return {
      success: true,
      data: price
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }
}

const update = async (price_id, newPrice) => {
  try{
    const price = await Prices.findById(price_id)
    price.name = newPrice.name
    price.category = newPrice.category
    price.desc = newPrice.desc
    await price.save()
    return {
      success: true,
      data: price
    };
  } catch (err) {
    return {
      success: false,
      error: err.message
    }
  }

}

const remove = async (price_id) => {
  try{
    await Prices.deleteOne({ _id:price_id})
    return {
      success : true,
      data : "Price deleted"
    }
  }catch(err){
    return {
      success : false,
      err : err.message
    }
  }
}

module.exports = {
  update,
  remove,
  findAll,
  create,
}