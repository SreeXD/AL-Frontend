import { motion } from 'framer-motion'

interface IconProps {
    name: string 
    height: string
    width: string
    variants?: any
}

export default function Icon({ name, height, width, ...remaining }: IconProps) {
    const style = {
        height,
        width,
        fill: 'white'
    }

    if (name == 'home') {
        return (
            <motion.svg style={style} {...remaining} viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.86081 4.20427C9.86081 4.48644 9.62193 4.70748 9.35121 4.70748H8.84161L8.85275 7.21881C8.85275 7.26113 8.84957 7.30346 8.84479 7.34578V7.59817C8.84479 7.94461 8.55973 8.22522 8.20779 8.22522H7.95299C7.93547 8.22522 7.91796 8.22522 7.90044 8.22365C7.87815 8.22522 7.85585 8.22522 7.83355 8.22522H7.31599H6.93379C6.58185 8.22522 6.29679 7.94461 6.29679 7.59817V7.22194V6.21866C6.29679 5.9412 6.06906 5.71703 5.78719 5.71703H4.76799C4.48612 5.71703 4.25839 5.9412 4.25839 6.21866V7.22194V7.59817C4.25839 7.94461 3.97334 8.22522 3.62139 8.22522H3.23919H2.73119C2.7073 8.22522 2.68341 8.22365 2.65952 8.22208C2.64041 8.22365 2.6213 8.22522 2.60219 8.22522H2.34739C1.99545 8.22522 1.71039 7.94461 1.71039 7.59817V5.84244C1.71039 5.82833 1.71039 5.81265 1.71199 5.79854V4.70748H1.20079C0.914143 4.70748 0.691193 4.48801 0.691193 4.20427C0.691193 4.06319 0.738968 3.93778 0.850443 3.82804L4.93361 0.324415C5.04509 0.214681 5.17249 0.199005 5.28396 0.199005C5.39544 0.199005 5.52284 0.230358 5.61839 0.308739L9.68563 3.82804C9.81303 3.93778 9.87673 4.06319 9.86081 4.20427Z" fill="#DBDBDB"/>
            </motion.svg>
        )
    }

    if (name == 'features') {
        return (
            <motion.svg style={style} {...remaining} viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.80992 0.998098C5.91562 0.752654 5.83679 0.466004 5.62001 0.308346C5.40323 0.150688 5.10763 0.165021 4.90518 0.340594L0.31878 4.3537C0.139624 4.51136 0.0751274 4.76397 0.159331 4.98612C0.243534 5.20828 0.458522 5.35877 0.6968 5.35877H2.69439L1.31668 8.57283C1.21098 8.81828 1.28981 9.10493 1.50659 9.26259C1.72336 9.42025 2.01897 9.40591 2.22142 9.23034L6.80782 5.21723C6.98698 5.05958 7.05147 4.80697 6.96727 4.58481C6.88306 4.36266 6.66987 4.21396 6.4298 4.21396H4.43221L5.80992 0.998098Z" fill="#DBDBDB"/>
            </motion.svg>

        )
    }

    if (name == 'pricing') {
        return (
            <motion.svg style={style} {...remaining} viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.47457 3.92546C7.47457 4.74779 7.20762 5.50741 6.75794 6.12371L9.02606 8.39363C9.25001 8.61757 9.25001 8.98126 9.02606 9.20521C8.80211 9.42915 8.43843 9.42915 8.21448 9.20521L5.94636 6.93529C5.33007 7.38677 4.57044 7.65192 3.74812 7.65192C1.68961 7.65192 0.0216675 5.98397 0.0216675 3.92546C0.0216675 1.86695 1.68961 0.199005 3.74812 0.199005C5.80662 0.199005 7.47457 1.86695 7.47457 3.92546ZM4.10643 2.06223C4.10643 1.86516 3.94519 1.70392 3.74812 1.70392C3.55105 1.70392 3.3898 1.86516 3.3898 2.06223V2.31305C3.25365 2.34351 3.11749 2.39188 2.99208 2.46534C2.74305 2.61404 2.52806 2.87381 2.52985 3.25183C2.53165 3.61552 2.74484 3.84484 2.97237 3.981C3.16944 4.09924 3.41489 4.17449 3.61017 4.23182L3.64062 4.24078C3.86636 4.30886 4.03118 4.3626 4.14226 4.43247C4.23363 4.4898 4.24617 4.52922 4.24796 4.57938C4.24975 4.66896 4.21571 4.72271 4.14226 4.7675C4.05268 4.82304 3.91115 4.85708 3.75887 4.8517C3.56 4.84454 3.37368 4.78183 3.13003 4.69942C3.08882 4.68509 3.04582 4.67075 3.00104 4.65642C2.81292 4.59372 2.61048 4.69583 2.54777 4.88216C2.48507 5.06848 2.58718 5.27272 2.77351 5.33542C2.80755 5.34617 2.84517 5.35871 2.88279 5.37305C3.03149 5.425 3.20348 5.48412 3.38801 5.52354V5.78869C3.38801 5.98576 3.54925 6.147 3.74633 6.147C3.9434 6.147 4.10464 5.98576 4.10464 5.78869V5.54145C4.24796 5.511 4.39129 5.46083 4.52028 5.38021C4.77647 5.22076 4.96996 4.94845 4.96459 4.57401C4.95921 4.21032 4.75498 3.97563 4.52386 3.82872C4.31783 3.69972 4.05985 3.6209 3.85919 3.55998L3.84665 3.5564C3.61733 3.48653 3.4543 3.43636 3.33964 3.36828C3.24648 3.31275 3.24469 3.2805 3.24469 3.24825C3.24469 3.18196 3.26977 3.1318 3.35577 3.08163C3.45251 3.0243 3.59942 2.99026 3.74095 2.99206C3.91294 2.99385 4.10285 3.03147 4.29992 3.08522C4.49162 3.13538 4.6869 3.02251 4.73885 2.83082C4.79081 2.63912 4.67615 2.44384 4.48445 2.39188C4.368 2.36142 4.23901 2.33097 4.10643 2.30768V2.06223Z" fill="#DBDBDB"/>
            </motion.svg>

        )
    }
    
    if (name == 'chat') {
        return (
            <motion.svg style={style} {...remaining} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0C0.448438 0 0 0.448457 0 1.00004V5.50024C0 6.05182 0.448438 6.50028 1 6.50028H2.5V7.75033C2.5 7.84565 2.55313 7.93159 2.6375 7.97378C2.72187 8.01597 2.82344 8.0066 2.9 7.95034L4.83281 6.50028H7C7.55156 6.50028 8 6.05182 8 5.50024V1.00004C8 0.448457 7.55156 0 7 0H1Z" fill="#613CF5"/>
            </motion.svg>
        )
    }

    if (name == 'cross') {
        return (
            <motion.svg style={style} {...remaining} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </motion.svg>
        )
    }

    if (name == 'send') {
        return (
            <motion.svg style={style} {...remaining} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
            </motion.svg>
        )
    }

    if (name == 'ethereum') {
        return (
            <svg width="33" height="56" viewBox="0 0 33 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4951 0L16.1346 1.27266V38.199L16.4951 38.5728L32.9899 28.4409L16.4951 0Z" fill="#343434"/>
                <path d="M16.4952 0L0 28.4409L16.4952 38.5728V20.6498V0Z" fill="#8C8C8C"/>
                <path d="M16.4951 41.818L16.2919 42.0755V55.2293L16.4951 55.8457L33 31.6914L16.4951 41.818Z" fill="#3C3C3B"/>
                <path d="M16.4952 55.8457V41.818L0 31.6914L16.4952 55.8457Z" fill="#8C8C8C"/>
                <path d="M16.4952 38.5728L32.9899 28.4409L16.4952 20.6498V38.5728Z" fill="#141414"/>
                <path d="M0 28.4409L16.4952 38.5728V20.6498L0 28.4409Z" fill="#393939"/>
            </svg>
        )
    }

    if (name == 'polygon') {
        return (
            <motion.svg style={style} {...remaining} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.06252 3.04478C8.84377 2.92538 8.56252 2.92538 8.31252 3.04478L6.56252 4.02986L5.37502 4.65672L3.65627 5.6418C3.43752 5.7612 3.15627 5.7612 2.90627 5.6418L1.56252 4.86568C1.34377 4.74627 1.18752 4.50747 1.18752 4.23881V2.74627C1.18752 2.50747 1.31252 2.26866 1.56252 2.11941L2.90627 1.37314C3.12502 1.25374 3.40627 1.25374 3.65627 1.37314L5.00002 2.14926C5.21877 2.26866 5.37502 2.50747 5.37502 2.77612V3.7612L6.56252 3.10448V2.08956C6.56252 1.85075 6.43752 1.61194 6.18752 1.46269L3.68752 0.0597061C3.46877 -0.0596969 3.18752 -0.0596969 2.93752 0.0597061L0.375015 1.49254C0.125015 1.61194 1.52588e-05 1.85075 1.52588e-05 2.08956V4.89553C1.52588e-05 5.13433 0.125015 5.37314 0.375015 5.52239L2.90627 6.92538C3.12502 7.04478 3.40627 7.04478 3.65627 6.92538L5.37502 5.97015L6.56252 5.31344L8.28127 4.35821C8.50002 4.23881 8.78127 4.23881 9.03127 4.35821L10.375 5.10448C10.5938 5.22389 10.75 5.46269 10.75 5.73135V7.22389C10.75 7.46269 10.625 7.7015 10.375 7.85075L9.06252 8.59702C8.84377 8.71642 8.56252 8.71642 8.31252 8.59702L6.96877 7.85075C6.75002 7.73135 6.59377 7.49254 6.59377 7.22389V6.26866L5.40627 6.92538V7.91045C5.40627 8.14926 5.53127 8.38807 5.78127 8.53732L8.31252 9.9403C8.53127 10.0597 8.81252 10.0597 9.06252 9.9403L11.5938 8.53732C11.8125 8.41792 11.9688 8.17911 11.9688 7.91045V5.07463C11.9688 4.83583 11.8438 4.59702 11.5938 4.44777L9.06252 3.04478Z" fill="#8247E5"/>
            </motion.svg>

        )
    }

    if (name == 'arbitrum') {
        return (
            <motion.svg style={style} {...remaining} viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.58399 0.0912258H3.46559C3.38399 0.0912258 3.30719 0.144026 3.27839 0.220826L0.542389 7.71843L1.69919 8.38563L4.67519 0.220826C4.69919 0.153626 4.65119 0.0864258 4.58399 0.0864258V0.0912258Z" fill="white"/>
            </motion.svg>

        )
    }

    if (name == 'avalanche') {
        return (
            <motion.svg style={style} {...remaining} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.996 6.00002C11.996 9.30935 9.31154 11.992 6.00001 11.992C2.6885 11.992 0.0039978 9.30935 0.0039978 6.00002C0.0039978 2.69071 2.6885 0.00799561 6.00001 0.00799561C9.31154 0.00799561 11.996 2.69071 11.996 6.00002ZM4.30091 8.38454H3.13725C2.89273 8.38454 2.77195 8.38454 2.69831 8.33746C2.61876 8.28592 2.57015 8.20055 2.56426 8.10632C2.55984 8.01951 2.62024 7.91349 2.74102 7.70152L5.61423 2.64046C5.73649 2.42554 5.79835 2.31808 5.87642 2.27834C5.96038 2.23565 6.06055 2.23565 6.14451 2.27834C6.22258 2.31808 6.28445 2.42554 6.4067 2.64046L6.99737 3.67086L7.00038 3.67612C7.13243 3.90668 7.19939 4.0236 7.22863 4.14631C7.26103 4.28027 7.26103 4.42158 7.22863 4.55553C7.19917 4.67918 7.13288 4.79694 6.99884 5.03099L5.48961 7.69711L5.48571 7.70394C5.35279 7.9364 5.28543 8.05422 5.19207 8.1431C5.09043 8.24028 4.96817 8.31089 4.83413 8.35071C4.71187 8.38454 4.57489 8.38454 4.30091 8.38454ZM7.23953 8.38454H8.90691C9.1529 8.38454 9.27665 8.38454 9.35035 8.33603C9.42987 8.28448 9.47993 8.1976 9.4844 8.10345C9.48863 8.01943 9.42955 7.91754 9.31378 7.71789C9.30979 7.71109 9.3058 7.70418 9.30172 7.69714L8.46651 6.2693L8.45701 6.25322C8.33965 6.05489 8.28041 5.95473 8.20432 5.91602C8.12041 5.87332 8.02164 5.87332 7.93772 5.91602C7.86112 5.95576 7.79926 6.06027 7.677 6.27077L6.84477 7.69861L6.84191 7.70353C6.72009 7.91369 6.6592 8.01871 6.66359 8.10488C6.66948 8.19911 6.71809 8.28592 6.79763 8.33746C6.86981 8.38454 6.99354 8.38454 7.23953 8.38454Z" fill="#E84142"/>
            </motion.svg>

        )
    }

    throw new Error('icon should have a valid name')
}