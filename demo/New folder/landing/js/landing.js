document.addEventListener('DOMContentLoaded', () => {
    const { event, logger, listener, bus } = jamja

    listener.click()

    const getBusinessType = () => {
        if (window.business_type_an.checked) {
            return 'Đồ ăn'
        } else if (window.business_type_uong.checked) {
            return 'Đồ uống'
        } else if (window.business_type_lam_dep.checked) {
            return 'Làm đẹp'
        } else if (window.business_type_khac.checked) {
            return 'Khác'
        }

        return ""
    }

    const getProvinceSelected = () => {
        if (window.province_hn.checked) {
            return 'Hà Nội'
        } else if (window.province_sg.checked) {
            return 'TP. HCM'
        }

        return ""
    }

    event.listen('go_to_id', id => {
        if (window[id]) {
            window[id].scrollIntoView({ behavior: "smooth", block: 'start' })
        }
    })

    event.listen('show_modal', (type = 'finish') => {
        document.documentElement.addClass('lock-scroll')
        window.overlay.addClass('show')
        
        if (type === 'finish') {
            window.reg_box.removeClass('pmodal-dialog')
            window.reg_box.removeClass('show')
            window.modal_finish.addClass('show')
        } else if (type === 'reg') {
            window.username.removeClass('error')
            window.business_type.removeClass('error')
            window.brand_name.removeClass('error')
            window.phone_number.removeClass('error')
            window.email.removeClass('error')
            window.reg_box.addClass('pmodal-dialog')
            window.reg_box.addClass('show')
        }
    })
    
    event.listen('hide_modal', () => {
        document.documentElement.removeClass('lock-scroll')
        window.modal_finish.removeClass('show')
        window.overlay.removeClass('show')

        window.reg_box.removeClass('pmodal-dialog')
        window.reg_box.removeClass('show')
    })

    event.listen('submit_reg_partner', () => {
        const body = {
            province: getProvinceSelected(),
            username: window.username.value,
            business_type: getBusinessType(),
            brand_name: window.brand_name.value,
            phone_number: window.phone_number.value,
            email: window.email.value,
        }

        window.username.removeClass('error')
        window.business_type.removeClass('error')
        window.brand_name.removeClass('error')
        window.phone_number.removeClass('error')
        window.email.removeClass('error')

        let fillAll = true

        if (!body.province) {
            fillAll = false
            window.province.addClass('error')
        }

        if (!body.username) {
            fillAll = false
            window.username.addClass('error')
        }
        
        if (!body.business_type) {
            fillAll = false
            window.business_type.addClass('error')
        }

        if (!body.brand_name) {
            fillAll = false
            window.brand_name.addClass('error')
        }

        if (!body.phone_number) {
            fillAll = false
            window.phone_number.addClass('error')
        }

        if (!body.email) {
            fillAll = false
            window.email.addClass('error')
        }


        // raise fill error
        if (!fillAll) {
            window.reg_alert.innerHTML = 'Vui lòng cung cấp đủ thông tin ở trên'
            window.reg_alert.removeClass('hidden')
            return
        }

        // raise test regex error
        if (!/^\d{9,12}$/.test(body.phone_number)) {
            window.reg_alert.innerHTML = 'Số điện thoại không hợp lệ'
            window.phone_number.addClass('error')
            window.reg_alert.removeClass('hidden')
            return
        }

        if (!/^.+@.+\..+$/.test(body.email)) {
            window.reg_alert.innerHTML = 'Email thoại không hợp lệ'
            window.email.addClass('error')
            window.reg_alert.removeClass('hidden')
            return
        }

        window.reg_alert.addClass('hidden')

        window.submit_reg_partner.addClass('pbtn-loading')
        bus.command('partner_register', body).then(data => {
            logger.info(data)
            event.emit('show_modal', 'finish')

            window.submit_reg_partner.removeClass('pbtn-loading')
        }).catch(err => {
            window.submit_reg_partner.removeClass('pbtn-loading')
            window.reg_alert.innerHTML = 'Xin lỗi! Server đang gặp sự cố. Xin hãy thử lại sau.'
            window.reg_alert.removeClass('hidden')
        })
    })
})