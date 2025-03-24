import {factories} from "@strapi/strapi";

export default factories.createCoreController('api::product.product', ({ strapi }) =>  ({
  // Method 1: Creating an entirely custom action
  async find(ctx) {
    const {region} = ctx.query

    const knex = strapi.db.connection

    const hiddenProductIds = await knex('product_availability')
      .where({id: region, hidden: true})
      .pluck('product_id')

    const entities = await strapi.entityService.findMany('api::product.product', {
      filters: {
        id: { $notIn: hiddenProductIds.length ? hiddenProductIds : [-1] }
      },
      populate: '*',
    })

    return this.transformResponse(entities);
  }
}))