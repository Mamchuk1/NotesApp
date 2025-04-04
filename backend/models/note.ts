import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../src/config/db';

interface NoteAttributes {
    id?: number;
    title: string;
    content: string;
    createdAt?: Date;
}

interface NoteCreationAttributes extends Optional<NoteAttributes, 'id' | 'createdAt'> {}

class Note extends Model<NoteAttributes, NoteCreationAttributes> implements NoteAttributes {
    public id!: number;
    public title!: string;
    public content!: string;
    public createdAt!: Date;
}

Note.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'notes',
        timestamps: false,
    }
);

export default Note;