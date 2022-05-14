const { getRobots } = require("./robotsRouter");

const expectedRobotList = [
  {
    _id: "627ed03369c2152d4d8deec0",
    name: "Wall-e",
    creationDate: "2022-05-14T00:00:00.000Z",
    image: "https://miro.medium.com/max/1400/1*9VrbLFsI8lqLafp7m8o7DQ.png",
    speed: 2,
    toughness: 2,
  },
];
jest.mock("../../db", () => ({ find: jest.fn(() => expectedRobotList) }));

describe("Given a getRobots funtion", () => {
  describe("When it is called", () => {
    test("Then it should call the response method with status 200", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: () => {},
      };
      const expectedStatus = 200;
      await getRobots(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });
    test("Then it should call the responses method json with a list of", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      await getRobots(null, res);

      expect(res.json).toHaveBeenCalledWith(expectedRobotList);
    });
  });
});
