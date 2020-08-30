describe("funcsions", () => {
  describe("forEach", () => {
    it("should equal mathod forEach", () => {
      const i = [1, 2, 3];

      expect(forEach(i, cbFor)).to.equal(i.forEach(cbFor));
    });
  });
  describe("MyMap", () => {
    it("should show new array multiplied  on two", () => {
      const i = [1, 2, 3];
      const newArr = MyMap(i, mapCb);
      const copyItems = i.map(mapCb);
      const res = (value, i) => {
        return value;
      };

      expect(newArr.forEach(res)).to.equal(copyItems.forEach(res));
    });
  });
  describe("filter", () => {
    it("New arr with item length == 6", () => {
      const fil = words.filter(function (item) {
        return item.length == 6;
      });
      expect(resFilter).to.eql(fil);
    });
  });

  describe("some", () => {
    it("should equal mathod some", () => {
      let nums = [1, 2, 3, 4, 5];
      const testRes = (value, i) => {
        return value === 5;
      };
      expect(some(nums, testRes)).to.equal(nums.some(testRes));
    });
  });
  describe("every", () => {
    it("should equal method every", () => {
      let nums = [1, 2, 3, 4, 5];
      const ret = (value, i) => {
        return value === 5;
      };
      expect(every(nums, ret)).to.equal(nums.every(ret));
    });
  });
  describe("find", () => {
    it(" Test method find", () => {
      const testFind = nums.find(cbCheck);
      expect(resFind).to.equal(testFind);
    });
  });
  describe("reduce", () => {
    it("should equal method reduce", () => {
      let nums = [1, 2, 3, 4, 5];
      const ret = (value, num) => {
        return value + num;
      };
      expect(reduce(nums, ret, 0)).to.equal(nums.reduce(ret, 0));
    });
  });
});
