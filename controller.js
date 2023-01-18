const { getStackForMember } = require('./db');

const getStackByMemberId = (memberId) => {
    return getStackForMember(memberId)}

module.exports = { getStackByMemberId }