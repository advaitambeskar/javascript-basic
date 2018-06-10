function countWords(list) {
	return list.reduce(function(counts, cur) {
		counts[cur] = ++counts[cur] || 1;
		return counts;
	}, {});
};
module.exports = countWords;