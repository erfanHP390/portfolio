import React, { useState, useEffect } from 'react'
import UseData from '../../Hooks/UseData'
import Masonry from 'react-masonry-css'
import Modal from 'react-modal'
import { FiUser, FiCode, FiFilePlus, FiExternalLink } from 'react-icons/fi'
import { BsXCircle } from 'react-icons/bs'
import { Helmet } from 'react-helmet'

import './Works.css'

export default function Works ({ condition = true, items = 4 }) {
  const {
    local,
    handleData,
    data,
    handleModelData,
    isOpen,
    setIsOpen,
    singleData
  } = UseData()
  const [test, setTest] = useState('All')
  const handleSearch = text => {
    handleData(text)
    setTest(text)
  }
  useEffect(() => {
    setTest('All')
    handleData('All')
  }, [])
  const handleModle = id => {
    handleModelData(id)
  }

  const item = condition ? 3 : 2

  const breakpointColumnsObj = {
    default: item,
    1100: 2,
    500: 1
  }

  return (
    <div>
      <Helmet>
        <title>کارهای من</title>
      </Helmet>
      <section className='works-container'>
        <div>
          <div className='container  works'>
            <div className='works-header'>
              <h2 className='about-me-title  color-dark'>نمونه کارها</h2>
              <ul
                className={`${
                  item === 2 ? 'works-list-30' : 'works-list-40'
                } works-list`}
              >
                <li
                  className={`${
                    test === 'All' ? 'active' : 'filtered-btn '
                  } works-list-item`}
                  onClick={() => handleSearch('All')}
                >
                  همه
                </li>
                <li
                  className={`${
                    test === 'Web Design' ? 'active' : 'filtered-btn'
                  } works-list-item`}
                  onClick={() => handleSearch('Web Design')}
                >
                  طراحی وب
                </li>
                <li
                  className={`${
                    test === 'Logo' ? 'active' : 'filtered-btn ml-0'
                  } works-list-item`}
                  onClick={() => handleSearch('Logo')}
                >
                   فیگما (بزودی)
                </li>
              </ul>
            </div>

            <Masonry
              breakpointCols={breakpointColumnsObj}
              className='my-masonry-grid'
              columnClassName='my-masonry-grid_column'
            >
              {data.slice(0, items).map(item => (
                <div
                  style={{
                    background: `${local === 'dark' ? 'transparent' : item?.bg}`
                  }}
                  className='my-masonry-grid-item'
                  key={item.id}
                >
                  <div className='my-masonry-grid-item-image'>
                    <img
                      onClick={() => handleModle(item.id)}
                      className='my-masonry-grid-item-img'
                      src={item?.imgSmall}
                      alt={item?.imgSmall}
                    />
                  </div>
                  <span className='my-masonry-grid-item-subtitle'>
                    {item?.tag}
                  </span>
                  <h2
                    onClick={() => handleModle(item.id)}
                    className='my-masonry-grid-item-title'
                  >
                    {item?.title}
                  </h2>
                </div>
              ))}
            </Masonry>

            <Modal
              isOpen={isOpen}
              onRequestClose={() => setIsOpen(false)}
              className='modal-container'
            >
              <div className='modal'>
                <div className='modal-scrollbar'>
                  {/* close button */}
                  <BsXCircle
                    onClick={() => setIsOpen(false)}
                    className='modal-close-btn'
                  />
                  <h2 className='modal-title'>پروژه {singleData.tag}</h2>
                  <div className='modal-infos'>
                    <div className='modal-infos-space'>
                      <p className='modal-infos-item'>
                        <FiFilePlus className='modal-infos-item-icon' />
                        پروژه :&nbsp;{' '}
                        <span className='font-modal-t '>
                          {singleData?.title}
                        </span>
                      </p>
                      <p className='modal-infos-item  modal-loc'>
                        <FiCode className='modal-infos-item-icon ' />
                        زبان ها :&nbsp;
                        <span className='font-modal-t'>
                          {singleData?.langages}
                        </span>
                      </p>
                    </div>
                    <div className='modal-infos-space'>
                      <p className='modal-infos-item  fixed-item-margin'>
                        <FiUser className='modal-infos-item-icon' />
                        مشتری :&nbsp;
                        <span className='font-modal-t'>
                          {singleData?.client}
                        </span>
                      </p>
                      <p className='modal-infos-item  modal-loc '>
                        <FiExternalLink className='modal-infos-item-icon' />
                        پیش نمایش :&nbsp;
                        <span className='font-modal-t modal-link'>
                          <a
                            href={singleData?.link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {singleData?.linkText}
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className='modal-description'>{singleData?.description}</p>
                  <img className='modal-img' src={singleData.img} alt='' />
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </section>
    </div>
  )
}
