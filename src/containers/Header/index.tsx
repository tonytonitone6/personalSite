import React, {
  FunctionComponent,
  useState,
  MouseEvent,
  useLayoutEffect,
  useRef,
  useCallback,
  memo,
  useEffect
} from 'react'
import {FormattedMessage} from 'react-intl'
import Worker from "worker-loader!../App/worker";

import {useMenuValue} from '@context/index'
import SocialContent from './SocialContent'
import MobileHeader from './MobileHeader'

import bgPhoto from '../../images/bg.jpg'
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderMenu,
  Introduction,
  SocialArea,
  SocialPersonal,
  SocialBgImage,
} from './styles'

const worker = new Worker();

type image = {
  imageURL: string
  blob: object
}

const Header: FunctionComponent = () => {
  const [{menuList, refs}, _] = useMenuValue()
  const [aniStatus, setAnimation] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)
  const imageRef = useRef<HTMLImageElement>(null)
  let objectURL: any;
  worker.addEventListener("message", (e) => {
    const { data: { blob } } = e;
    objectURL = URL.createObjectURL(blob);

    if (imageRef && imageRef.current) {
      imageRef.current.setAttribute('src', objectURL)
    }

  });
  
  /**  detection location */
  // useLayoutEffect(() => {
  //   const validStatus = (): void => {
  //     window.scrollY > 100 ? setAnimation(true) : setAnimation(false)
  //   }
  //   window.addEventListener('scroll', validStatus, false)

  //   return () => {
  //     window.removeEventListener('scroll', validStatus, false)
  //   }
  // }, [])

  const removeDataSrc = () => {
    if (imageRef && imageRef.current) {
      imageRef.current.removeAttribute('data-src');
      URL.revokeObjectURL(objectURL)
    }
  }

  useEffect(() => {
    const imageElements = imageRef.current!.dataset.src
    worker.postMessage(imageElements);
  }, [])

  const memoToggle = useCallback(() => {
    setActive(preActive => !preActive)
  }, [])

  const handleClick = (e: MouseEvent<HTMLLIElement>, id: number) => {
    e.preventDefault()
    setActive(preActive => !preActive)
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleRenderMenuList = ({
    id,
    name,
  }: {
    id: number
    name: string
  }): JSX.Element | null => {
    if (menuList && menuList.length !== 0) {
      return (
        <li key={id} onClick={e => handleClick(e, id)}>
          <a href="#">
            <FormattedMessage id={name} />
          </a>
        </li>
      )
    }
    return null
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderMenu aniStatus={aniStatus} active={active}>
          <ul>
            {menuList && menuList.length !== 0
              ? menuList.map(handleRenderMenuList)
              : null}
          </ul>
          <MobileHeader active={active} onToggle={memoToggle} />
        </HeaderMenu>
        <Introduction>
          <SocialArea col8={true}>
            <SocialBgImage 
              ref={imageRef}
              onLoad={removeDataSrc}
              data-src="../../images/bg.jpg" 
            />
          </SocialArea>
          <SocialPersonal col4={true}>
            <SocialContent />
          </SocialPersonal>
        </Introduction>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
