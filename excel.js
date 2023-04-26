const lessonSchema = {
  '章节名称': {
    prop: 'chapterName',
    type: String
  },
  '标题': {
    prop: 'title',
    type: String
  },
  '课程包ID': {
    prop: 'packageId',
    type: String
  },
  '课程讲ID': {
    prop: 'id',
    type: String
  },
  '内容': {
    prop: 'content',
    type: String
  },
  '图片地址': {
    prop: 'imageUrl',
    type: String
  },
  '播放地址': {
    prop: 'videoUrl',
    type: String
  },
  '有无logo': {
    prop: 'logo',
    type: String
  },
  '教师团队': {
    prop: 'teacherTeam',
    type: String
  }
}
const tabSchema = {
  '是否下架': {
    type: Boolean,
    prop: 'isHide',
    type: (value) => value === '是' ? true : false

  },
  '内容类型': {
    type: String,
    prop: 'type',
    type: (value) => value === '课程讲' ? 'lesson' : 'news'
  },
  '标题': {
    type: String,
    prop: 'title'
  },
  'id': {
    type: String,
    prop: 'id'
  },
  '内容介绍': {
    type: String,
    prop: 'content'
  },
  '图片地址（封面）': {
    type: String,
    prop: 'imageUrl'
  },
  '播放地址': {
    type: String,
    prop: 'videoUrl'
  },
  '有无logo': {
    prop: 'logo',
    type: String
  }
}
const bookSchema = {
  '类型': {
    prop: 'type',
    type: (value) => value === '数学' ? 'math' : 'physics'
  },
  '书本名称': {
    prop: 'bookName',
    type: String
  },
  '是否禁用': {
    prop: 'disabled',
    type: (value) => value === '是' ? true : false
  }

}

const accountSchema = {
  '账号': {
    prop: 'phone',
    type: String
  },
  '密码': {
    prop: 'password',
    type: String
  },
  '性别': {
    prop: 'sex',
    type: String
  },
  '姓名': {
    prop: 'username',
    type: String
  }
}
const json = {
  '物理': {
    key: 'physics',
    schema: lessonSchema
  },
  '数学': {
    key: 'math',
    schema: lessonSchema
  },
  // ['volunteering','professionalKnowledge','careerPlan','universityStyle']
  '生涯规划': {
    key: 'careerPlan',
    schema: tabSchema
  },
  '志愿填报': {
    key: 'volunteering',
    schema: tabSchema
  },
  '职业专业认知': {
    key: 'professionalKnowledge',
    schema: tabSchema
  },
  '大学风采': {
    key: 'universityStyle',
    schema: tabSchema
  },
  '教材课本': {
    key: 'textBook',
    schema: bookSchema
  },
  '账号信息': {
    key: 'accountInfo',
    schema: accountSchema
  }
}
const LiteracyTeacherTeam = `生涯规划团队老师包括毕业于北京师范大学、华东师范大学、浙江大学等国内外高校心理学专业，其中多名教师有超过10年高中生涯教育、学业辅导经验，曾指导超过百名学生进入理想大学专业。`


try {
  let fileString = ''
  const readXlsxFile = require('read-excel-file/node')
  const path = require('path')
  const fs = require('fs')
  readXlsxFile.readSheetNames('./data.xlsx').then(async data => {
    console.log(data)
    // data.forEach(async sheet => {

    // })

    for await (sheet of data) {
      const jsonData = json?.[sheet] || {}
      const { key, schema } = jsonData
      let rows = { rows: [] }
      if (key) {
        rows = await readXlsxFile('./data.xlsx', { sheet, schema })
      }
      console.table(rows.rows)
      let chapterId = 0
      let chapterName = ''
      fileString += !key ? '' : `export const ${key} = [\n${rows.rows.map((item, index) => {
        console.log(item.chapterName)
        if (item.chapterName || chapterId) {
          if (chapterName !== item.chapterName && item.chapterName) {
            chapterId++
          }
          chapterName = item.chapterName || chapterName
        }
        return JSON.stringify({ ...item, key, index, ...(!!chapterId ? { chapterId, chapterName } : {}), ...['physics', 'math'].includes(key) ? { type: 'lesson' } : {}, ...['volunteering', 'professionalKnowledge', 'careerPlan', 'universityStyle'].includes(key) ? { teacherTeam: LiteracyTeacherTeam } : {} }, null, 2)
      }).join(',\n')}\n];\n`

    }
    // console.log(fileString)
    fileString += `export default {\n${data.filter((sheet => !!json?.[sheet]?.key)).map((sheet => json?.[sheet]?.key)).join(',\n')}\n}`
    return fileString

  }).then(data => {
    // console.log(data)
    console.log(path.resolve(__dirname, './src/mock/data.ts'))
    fs.writeFile(path.resolve(__dirname, './src/mock/data.ts'), data, 'utf8', err => {
      console.log(err)
    })

  })
} catch (e) {
  console.log(e)
}