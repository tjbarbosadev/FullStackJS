import ColumnRepository from "../domain/repository/ColumnsRepository";

export default class ColumnService {
  constructor(readonly columnRepository: ColumnRepository) {}

  async getColumns(idBoard: number) {
    const columns = await this.columnRepository.findAllByIdBoard(idBoard);
    return columns;
  }
}