import { Schema, model } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const schema = new Schema({
  productName: { type: String, required: true },
  productImg: { type: String, required: true },
  productQuantity: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  publishedDate: { type: String, required: true },
  productLink: { type: String, required: true },
  comparePrice: { type: Number, required: true },
  tags: { type: Array, required: true },
  description: { type: String },
},{timestamps:true});

schema.plugin(paginate);
schema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.__v;
  return JSON.parse(JSON.stringify(obj).replace(/_id/g, 'id'));
};

export default model('Product', schema);
