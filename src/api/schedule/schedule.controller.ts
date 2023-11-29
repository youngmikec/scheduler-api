import { Controller, Get, Post, Put, Delete, Body, UsePipes } from "@nestjs/common";
import { ScheduleService } from "./schedule.service";
import { errorResponse, successResponse } from "src/utils/response";
import { ApiResponse } from "src/common";
import { GenerateScheduleDto } from "./dto/generate-schedule.dto";
import { BodyExistsPipe } from "src/CustomPipes";

@Controller('schedule')
export class ScheduleController {
    constructor(private scheduleService: ScheduleService){}

    @Get()
    async findAll(): Promise<ApiResponse> {
        try{
            const results = await this.scheduleService.findAll();
            return successResponse(results, 'Success');
        }catch(err){
            return errorResponse(err.message)
        }
    }

    @Post('generate')
    @UsePipes(new BodyExistsPipe())
    async create(@Body() generateScheduleDto: GenerateScheduleDto): Promise<ApiResponse> {
        try {
            const result = await this.scheduleService.create(generateScheduleDto);
            if(!result) throw new Error('Error! occurred while creating Schedule');

            return successResponse(result, "success");
        }catch(err) {
            return errorResponse(err.message);
        }
    }
}