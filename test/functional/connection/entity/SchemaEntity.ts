import {Entity} from "../../../../src/decorator/entity/Entity";
import {PrimaryGeneratedColumn} from "../../../../src/decorator/columns/PrimaryGeneratedColumn";
import {Column} from "../../../../src/decorator/columns/Column";

@Entity("ent", {schema: 'schema'})
export class SchemaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

}