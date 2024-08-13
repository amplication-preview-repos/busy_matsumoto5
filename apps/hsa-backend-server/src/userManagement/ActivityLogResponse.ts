import { ObjectType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ObjectType("ActivityLogResponseObject")
class ActivityLogResponse {
    @Field(() => Date)
    @Type(() => Date)
    timestamp!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    activity!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    userId!: string;
}

export { ActivityLogResponse as ActivityLogResponse };