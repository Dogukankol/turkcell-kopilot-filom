import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modals, ModalHeader, ModalBody, ResultItem, ResultItemContactBox, Button, ModalFooter } from '@/components/'
import { selectedServicePoint } from '@/stores/servicePoint/servicePointSlice'

function serviceCong({ visible }) {
  const dispatch = useDispatch();
  const formData = useSelector(selectedServicePoint);
  console.log(formData)
  return (
    <>
      <Modals visible={visible} className="modal-cong">
        <ModalHeader modalCloser="false">
        <i class="icon-done"></i>
          <h3>Randevu Oluşturabilmeniz İçin Bilgilerinizi Firmaya İlettik.</h3>
          <p>Randevu tarih ve saatinizi netleştirmek için aşağıdaki iletişim numarasını lütfen arayın.</p>
        </ModalHeader>
        <ModalBody>

          <div className="modal-service__results">
            <div className="box">
              {formData &&
                  <ResultItem title={formData.name} address={formData.address}>
                      <div className='result-item__contact'>
                        <ResultItemContactBox fullname={formData.name} telephone={formData.person} />
                      </div>

                  </ResultItem>
              }
            </div>

          </div>
        </ModalBody>
        <ModalFooter>
          
        <Button text="Ana Sayfaya Dön" className="mx-auto" />
        </ModalFooter>
      </Modals>
    </>
  )
}

export default serviceCong