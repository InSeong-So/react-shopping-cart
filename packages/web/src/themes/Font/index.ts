import FontSize from './FontSize';
import FontWeight from './FontWeight';

/**
 * <hr/>
 * * @description { h1 } font-size: 42px; line-height: 52px;
 * * @description { h2 } font-size: 30px; line-height: 40px;
 * * @description { h3 } font-size: 24px; line-height: 36px;
 * * @description { h4 } font-size: 20px; line-height: 28px;
 * * @description { p1 } font-size: 16px; line-height: 24px;
 * * @description { p2 } font-size: 15px; line-height: 22px;
 * * @description { p3 } font-size: 14px; line-height: 20px;
 * * @description { p4 } font-size: 12px; line-height: 18px;
 * <hr/>
 * @description { extrabold } font-weight: 800;
 * @description { bold } font-weight: 700;
 * @description { semibold } font-weight: 600;
 * @description { medium } font-weight: 500;
 * @description { regular } font-weight: 400;
 * <hr/>
 */
export default Object.assign({}, { ...FontSize, ...FontWeight });
