import {
  ArrayUnique,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator'

import { paginateDto } from '~/shared/dto/pager.dto'

export enum Sort {
  Newest = 'newest',
  Three_days_hottest = 'three_days_hottest',
  Weekly_hottest = 'weekly_hottest',
  Monthly_hottest = 'monthly_hottest',
  Hottest = 'hottest',
}

export class PostDto {
  @IsString({ message: '标题' })
  title: string

  @IsString({ message: '文章内容' })
  content: string

  @IsOptional()
  @IsUrl()
  cover?: string

  @ArrayUnique()
  tags?: string[]

  @IsString({ message: '分类' })
  category: string

  @IsBoolean({ message: '广告' })
  ad: boolean

  @IsString({ message: '权限' })
  permission: string

  @IsString({ message: '状态' })
  GWstatus: string

  @IsString({ message: '退回' })
  backAdvise: string

  @IsString({ message: '机构' })
  institutionCode: string

  @IsString({ message: '机构名字' })
  institutionNameDown: string
}

export class PostList extends paginateDto {
  @IsString()
  @IsOptional()
  category?: string

  @IsString()
  @IsOptional()
  tag?: string

  @IsEnum(Sort)
  @IsOptional()
  sort?: Sort

  @IsString()
  @IsOptional()
  permission?: string

  @IsString()
  @IsOptional()
  institutionCode?: string

  @IsString()
  @IsOptional()
  institutionNameDown?: string
}

export class PaginateDto {
  pageCurrent: string
  pageSize: string
}
