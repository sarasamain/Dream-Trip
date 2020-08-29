import {reorder, move } from '../utils/dnd';
import {days, reordered, moved} from './mocks';

describe('Map Itinerary', () => {
  describe('reorder', () => {
    it('should reorder items in the same day when dragged and dropped', () => {
      expect(reorder(days[1], 0, 1, 'ChIJtVaRHNsadkgRuD-x0eYNJ7g')).toStrictEqual(reordered);
    })
  })
  describe('move', () => {
    const source = {
      droppableId: "1",
      index: 0};
    const destination = {
      droppableId: "2",
       index: 0
    };
    it('should move items in different days maintaining the order when dragged and dropped', () => {
      expect(move(days[1], days[2], source, destination, 'ChIJtVaRHNsadkgRuD-x0eYNJ7g', 2)).toStrictEqual(moved);
    });
  })
})