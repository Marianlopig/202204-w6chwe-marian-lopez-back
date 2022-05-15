const { getRobots, deleteRobot } = require("./robotsRouter");

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
const mockDelete = jest.fn();
jest.mock("../../db", () => ({
  find: jest.fn(() => expectedRobotList),
  deleteOne: jest.fn((object) => mockDelete(object)),
}));

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

describe("Given a deleteRobot funtion", () => {
  describe("When it is called with an id 3", () => {
    test("Then it should return a json with an id 3 and a status 200", async () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const expectedStatus = 200;
      const expectedIdRobotDeleted = { _id: "3" };
      const req = {
        params: {
          idRobot: "3",
        },
      };

      await deleteRobot(req, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
      expect(res.json).toHaveBeenCalledWith(expectedIdRobotDeleted);
      expect(mockDelete).toHaveBeenCalledWith(expectedIdRobotDeleted);
    });
  });
});
