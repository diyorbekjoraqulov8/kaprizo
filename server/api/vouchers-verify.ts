export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    return await $fetch('https://voucher.khamraev.uz/api/vouchers/verify/', {
        method: 'POST',
        body
    })
})
