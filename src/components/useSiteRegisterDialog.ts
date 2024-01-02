import { SitePostRequest } from './../types/request/site.ts'
import { SitePostResponse } from './../types/response/site.ts'
// eslint-disable-next-line import/named
import axios, { AxiosResponse } from 'axios'
import { useState } from 'react'

const useSiteRegisterDialog = () => {
  const [name, setName] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const [metaTag, setMetaTag] = useState<string>('')
  const [step, setStep] = useState<number>(1)

  const onClickNextButton = () => {
    axios
      .post('/sites', {
        name,
        url,
        description,
      } as SitePostRequest)
      .then((response: AxiosResponse<SitePostResponse>) => {
        console.log(response)
        setMetaTag(response.data.metaTag)
        setStep(2)
        return response.data
      })
      .catch(function (error) {
        console.log(error)
        //TODO : remove this dummy code
        setMetaTag('TESTDUMMY234234')
        setStep(2)
      })
  }

  const onClickCheckButton = () => {
    axios
      .post('/check-sites', {})
      .then((response) => {
        console.log(response)
        setStep(3)
        return response.data
      })
      .catch(function (error) {
        console.log(error)
        //TODO : remove this dummy code
        setStep(4)
      })
  }

  const copyMetaTag = async () => {
    try {
      await navigator.clipboard.writeText(`<meta name="quack-run-site-verification" content="${copyMetaTag}">`)
    } catch (e) {
      console.log(e)
    }
  }
  return {
    name,
    url,
    description,
    setName,
    setUrl,
    setDescription,
    onClickNextButton,
    metaTag,
    onClickCheckButton,
    copyMetaTag,
    step,
    setStep,
  }
}

export default useSiteRegisterDialog
