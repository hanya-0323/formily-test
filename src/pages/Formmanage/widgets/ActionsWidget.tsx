import React, { useEffect } from 'react'
import { Space, Button, Radio } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { useDesigner, TextWidget } from '@designable/react'
import { GlobalRegistry } from '@designable/core'
import { observer } from '@formily/react'
import { loadInitialSchema, saveSchema } from '../service'

export const ActionsWidget = observer((props) => {
  const designer = useDesigner()
  useEffect(() => {
      loadInitialSchema(designer)
      return async ()=>{
          console.log('aaaaa')
          await designer.destroy()
          console.log('bbbbb')
        //   console.log(designer.destroy)
        // designer.destroy()
      }
  }, [])
  return (
    <Space style={{ marginRight: 10 }}>
      <Button href="https://designable-fusion.formilyjs.org">
        Alibaba Fusion
      </Button>
      {/* <Radio.Group
        value={GlobalRegistry.getDesignerLanguage()}
        optionType="button"
        options={[
          { label: 'English', value: 'en-us' },
          { label: '简体中文', value: 'zh-cn' },
        ]}
        onChange={(e) => {
          GlobalRegistry.setDesignerLanguage(e.target.value)
        }}
      /> */}
      <Button href="https://github.com/alibaba/formily" target="_blank">
        <GithubOutlined />
        Github
      </Button>
      <Button
        onClick={() => {
        //   saveSchema(designer)
        designer.destroy()
        designer.unmount()
        designer.unsubscribe()
        designer.detachEvents()
        window.history.back()
        }}
      >
        <TextWidget>返回列表</TextWidget>
      </Button>
      <Button
        type="primary"
        onClick={() => {
          saveSchema(designer)
        }}
      >
        <TextWidget>保存</TextWidget>
      </Button>
    </Space>
  )
})
